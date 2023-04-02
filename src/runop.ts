import { expect } from 'chai'
import { EntryPoint, EntryPoint__factory } from '@account-abstraction/contracts'
import { ethers } from 'hardhat'
import { HttpRpcClient } from '@account-abstraction/sdk/dist/src/HttpRpcClient'
import { ERC4337EthersProvider } from '@account-abstraction/sdk'
import { MyWalletApi } from '.'
import { deployments } from 'hardhat';
import { MyWalletDeployer__factory } from './types'
import { Greeter__factory } from './types/factories/Greeter__factory'
import { MyTokenPaymaster__factory } from './types/factories/MyTokenPaymaster__factory'
import { MyPaymasterApi } from './MyPaymasterApi'
import { BigNumber } from 'ethers'


/** Contracts deployed on goerli network */
const ENTRYPOINT_ADDR =  '0x0576a174D229E3cFA37253523E645A78A0C91B57' // '0x2167fA17BA3c80Adee05D98F0B55b666Be6829d6'

const runop = async () => {
  console.log('--- starting runop ---')
  const {deploy} = deployments;

  const originalProvider = ethers.provider
  const orignalSigner = originalProvider.getSigner()
  const network = await originalProvider.getNetwork()

  const entryPointAddress = ENTRYPOINT_ADDR

  const providerConfig = {
    entryPointAddress,
    bundlerUrl: 'http://localhost:9000/rpc', // 'https://eip4337-bundler-goerli.protonapp.io/rpc',
    chainId: network.chainId
  }

  console.log('--- entryPoint initialisation ---')
  const entryPoint = EntryPoint__factory.connect(providerConfig.entryPointAddress, originalProvider)

  /** Deploy greeter to test */
  console.log('--- deploying Greeter contract ---')
  const Greeter_factory = await ethers.getContractFactory('Greeter', orignalSigner)

  const { address: GreeterAddress } = await deploy("Greeter", {
    from: await orignalSigner.getAddress(),
    gasLimit: 4000000,
    deterministicDeployment: true
  })

  let Greeter = Greeter__factory.connect(GreeterAddress, orignalSigner)

  console.log('Greeter Address: ', GreeterAddress)
  console.log('--- end deploying Greeter contract ---')
  /** End Deploy greeter to test */

  /** THis is where we create our custom Wallet */
  console.log('--- deploying MyWalletDeployer contract ---')

  const { address: MyWalletDeployerAddress } = await deploy('MyWalletDeployer', {
    from: await orignalSigner.getAddress(),
    gasLimit: 4000000,
    deterministicDeployment: true
  });

  console.log('MyWalletDeployer Address: ', MyWalletDeployerAddress)

  const MyWalletDeployer = MyWalletDeployer__factory.connect(MyWalletDeployerAddress, orignalSigner)
  const factoryAddress = MyWalletDeployer.address

  console.log('Factory address:', factoryAddress)

  const ownerAddress = await orignalSigner.getAddress()

  const walletAddress = await MyWalletDeployer.getDeploymentAddress(entryPointAddress, ownerAddress, 0)
  console.log('--- end deploying MyWalletDeployer contract ---')

  const myPaymasterApi = new MyPaymasterApi();

  const smartWalletAPI = new MyWalletApi({
    provider: originalProvider,
    entryPointAddress: entryPoint.address,
    walletAddress,
    owner: orignalSigner,
    factoryAddress,
    paymasterAPI: myPaymasterApi
  })

  // Deploying token paymaster contract
  const signerAddress = await orignalSigner.getAddress()
  const { address: myTokenPaymasterAddress }  = await deploy("MyTokenPaymaster", {
    from: await orignalSigner.getAddress(),
    args: [signerAddress, "MTP", entryPoint.address],
    gasLimit: 4000000,
    deterministicDeployment: true
  })

  console.log('myTokenPaymaster Address: ', myTokenPaymasterAddress)
  
  const myTokenPaymaster = MyTokenPaymaster__factory.connect(myTokenPaymasterAddress, orignalSigner)

  const signerTokenBalance = await myTokenPaymaster.balanceOf(await orignalSigner.getAddress())
  console.log('Token Balance of Signer: ', signerTokenBalance)

  /** This marks the end of creation of our custom wallet api */
  console.log('--- Erc4337EthersProvider initialisation ---')

  const httpRpcClient = new HttpRpcClient(providerConfig.bundlerUrl, providerConfig.entryPointAddress, network.chainId)

  const aaProvier = await new ERC4337EthersProvider(
    providerConfig,
    orignalSigner,
    originalProvider,
    httpRpcClient,
    entryPoint,
    smartWalletAPI
  ).init()

  const aaSigner = aaProvier.getSigner()

  console.log('SCW address: ', await aaSigner.getAddress())

  await orignalSigner.sendTransaction({
    to: await aaSigner.getAddress(),
    value: ethers.utils.parseEther("10")
  })

  // await myTokenPaymaster.connect(orignalSigner).transfer(await aaSigner.getAddress(), 10, {
  //   gasLimit: 4000000
  // })

  console.log('SCW Balance', await aaSigner.getBalance())
  console.log('SCW Token Balance', await myTokenPaymaster.balanceOf(await aaSigner.getAddress()))

  const tx = await Greeter.connect(aaSigner).callStatic.addGreet({
    value: ethers.utils.parseEther('10'),
    gasLimit: 4000000
  })

  // await tx.wait()

  console.log(tx, '=====')
}

runop()
  .then(() => console.log('--- done ---'))
  .catch((e) => console.log(e))
