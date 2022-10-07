import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MyWalletDeployer, MyWalletDeployerInterface } from "../MyWalletDeployer";
declare type MyWalletDeployerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MyWalletDeployer__factory extends ContractFactory {
    constructor(...args: MyWalletDeployerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MyWalletDeployer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MyWalletDeployer;
    connect(signer: Signer): MyWalletDeployer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061242d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634861f39d1461003b578063ffb5b6af1461006b575b600080fd5b61005560048036038101906100509190610278565b61009b565b60405161006291906102da565b60405180910390f35b61008560048036038101906100809190610278565b61014b565b6040516100929190610354565b60405180910390f35b60008060ff60f81b3084604051806020016100b590610194565b6020820181038252601f19601f8201166040525088886040516020016100dc9291906103a2565b6040516020818303038152906040526040516020016100fc92919061043c565b604051602081830303815290604052805190602001206040516020016101259493929190610541565b6040516020818303038152906040528051906020012060001c9050809150509392505050565b60008160001b848460405161015f90610194565b61016a9291906103a2565b8190604051809103906000f590508015801561018a573d6000803e3d6000fd5b5090509392505050565b611e688061059083390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d1826101a6565b9050919050565b60006101e3826101c6565b9050919050565b6101f3816101d8565b81146101fe57600080fd5b50565b600081359050610210816101ea565b92915050565b61021f816101c6565b811461022a57600080fd5b50565b60008135905061023c81610216565b92915050565b6000819050919050565b61025581610242565b811461026057600080fd5b50565b6000813590506102728161024c565b92915050565b600080600060608486031215610291576102906101a1565b5b600061029f86828701610201565b93505060206102b08682870161022d565b92505060406102c186828701610263565b9150509250925092565b6102d4816101c6565b82525050565b60006020820190506102ef60008301846102cb565b92915050565b6000819050919050565b600061031a610315610310846101a6565b6102f5565b6101a6565b9050919050565b600061032c826102ff565b9050919050565b600061033e82610321565b9050919050565b61034e81610333565b82525050565b60006020820190506103696000830184610345565b92915050565b600061037a826102ff565b9050919050565b600061038c8261036f565b9050919050565b61039c81610381565b82525050565b60006040820190506103b76000830185610393565b6103c460208301846102cb565b9392505050565b600081519050919050565b600081905092915050565b60005b838110156103ff5780820151818401526020810190506103e4565b60008484015250505050565b6000610416826103cb565b61042081856103d6565b93506104308185602086016103e1565b80840191505092915050565b6000610448828561040b565b9150610454828461040b565b91508190509392505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6104a76104a282610460565b61048c565b82525050565b60008160601b9050919050565b60006104c5826104ad565b9050919050565b60006104d7826104ba565b9050919050565b6104ef6104ea826101c6565b6104cc565b82525050565b6000819050919050565b61051061050b82610242565b6104f5565b82525050565b6000819050919050565b6000819050919050565b61053b61053682610516565b610520565b82525050565b600061054d8287610496565b60018201915061055d82866104de565b60148201915061056d82856104ff565b60208201915061057d828461052a565b6020820191508190509594505050505056fe60806040523480156200001157600080fd5b5060405162001e6838038062001e68833981810160405281019062000037919062000170565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000600c6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620001b7565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f382620000c6565b9050919050565b60006200010782620000e6565b9050919050565b6200011981620000fa565b81146200012557600080fd5b50565b60008151905062000139816200010e565b92915050565b6200014a81620000e6565b81146200015657600080fd5b50565b6000815190506200016a816200013f565b92915050565b600080604083850312156200018a5762000189620000c1565b5b60006200019a8582860162000128565b9250506020620001ad8582860162000159565b9150509250929050565b611ca180620001c76000396000f3fe6080604052600436106100ab5760003560e01c80638da5cb5b116100645780638da5cb5b1461018e578063a9059cbb146101b9578063affed0e0146101e2578063b0d691fe1461020d578063c399ec8814610238578063d0cb75fa14610263576100b2565b80630565bb67146100b75780630825d1fc146100e05780631b71bb6e146101095780634a58db19146101325780634d44560d1461013c57806380c5c7d014610165576100b2565b366100b257005b600080fd5b3480156100c357600080fd5b506100de60048036038101906100d9919061106c565b61028c565b005b3480156100ec57600080fd5b506101076004803603810190610102919061113b565b6102e9565b005b34801561011557600080fd5b50610130600480360381019061012b91906111be565b61032e565b005b61013a610342565b005b34801561014857600080fd5b50610163600480360381019061015e9190611229565b6103c2565b005b34801561017157600080fd5b5061018c6004803603810190610187919061106c565b610442565b005b34801561019a57600080fd5b506101a361049f565b6040516101b09190611278565b60405180910390f35b3480156101c557600080fd5b506101e060048036038101906101db9190611229565b6104c5565b005b3480156101ee57600080fd5b506101f7610518565b60405161020491906112a2565b60405180910390f35b34801561021957600080fd5b50610222610547565b60405161022f919061131c565b60405180910390f35b34801561024457600080fd5b5061024d610571565b60405161025a91906112a2565b60405180910390f35b34801561026f57600080fd5b5061028a600480360381019061028591906113e3565b6105f9565b005b61029461070b565b6102e3848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506107d3565b50505050565b6102f1610857565b6102fc8484846108ce565b600084806040019061030e9190611473565b90500361031f5761031e846109d6565b5b61032881610a83565b50505050565b610336610b1f565b61033f81610b29565b50565b600061034c610547565b73ffffffffffffffffffffffffffffffffffffffff163460405161036f90611507565b60006040518083038185875af1925050503d80600081146103ac576040519150601f19603f3d011682016040523d82523d6000602084013e6103b1565b606091505b50509050806103bf57600080fd5b50565b6103ca61070b565b6103d2610547565b73ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b815260040161040c92919061152b565b600060405180830381600087803b15801561042657600080fd5b505af115801561043a573d6000803e3d6000fd5b505050505050565b61044a610857565b610499848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506107d3565b50505050565b6000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6104cd61070b565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610513573d6000803e3d6000fd5b505050565b60008060009054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600061057b610547565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105b39190611278565b602060405180830381865afa1580156105d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f49190611569565b905090565b61060161070b565b818190508484905014610649576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610640906115f3565b60405180910390fd5b60005b84849050811015610704576106f185858381811061066d5761066c611613565b5b905060200201602081019061068291906111be565b600085858581811061069757610696611613565b5b90506020028101906106a99190611473565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506107d3565b80806106fc90611671565b91505061064c565b5050505050565b6000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061079257503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6107d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c890611705565b60405180910390fd5b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516107fc919061178b565b60006040518083038185875af1925050503d8060008114610839576040519150601f19603f3d011682016040523d82523d6000602084013e61083e565b606091505b50915091508161085057805160208201fd5b5050505050565b61085f610547565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c3906117ee565b60405180910390fd5b565b60006108d983610be9565b9050610941848061014001906108ef9190611473565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505082610c1990919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff166000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146109d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c79061185a565b60405180910390fd5b50505050565b806020013560008081819054906101000a90046bffffffffffffffffffffffff1680929190610a0490611892565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610a80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7790611912565b60405180910390fd5b50565b60008114610b1c5760003373ffffffffffffffffffffffffffffffffffffffff16827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90604051610ad390611507565b600060405180830381858888f193505050503d8060008114610b11576040519150601f19603f3d011682016040523d82523d6000602084013e610b16565b606091505b50509050505b50565b610b2761070b565b565b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a60405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081604051602001610bfc91906119aa565b604051602081830303815290604052805190602001209050919050565b6000806000610c288585610c40565b91509150610c3581610c91565b819250505092915050565b6000806041835103610c815760008060006020860151925060408601519150606086015160001a9050610c7587828585610e5d565b94509450505050610c8a565b60006002915091505b9250929050565b60006004811115610ca557610ca46119d0565b5b816004811115610cb857610cb76119d0565b5b0315610e5a5760016004811115610cd257610cd16119d0565b5b816004811115610ce557610ce46119d0565b5b03610d25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1c90611a4b565b60405180910390fd5b60026004811115610d3957610d386119d0565b5b816004811115610d4c57610d4b6119d0565b5b03610d8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8390611ab7565b60405180910390fd5b60036004811115610da057610d9f6119d0565b5b816004811115610db357610db26119d0565b5b03610df3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dea90611b49565b60405180910390fd5b600480811115610e0657610e056119d0565b5b816004811115610e1957610e186119d0565b5b03610e59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5090611bdb565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610e98576000600391509150610f60565b601b8560ff1614158015610eb05750601c8560ff1614155b15610ec2576000600491509150610f60565b600060018787878760405160008152602001604052604051610ee79493929190611c26565b6020604051602081039080840390855afa158015610f09573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f5757600060019250925050610f60565b80600092509250505b94509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f9e82610f73565b9050919050565b610fae81610f93565b8114610fb957600080fd5b50565b600081359050610fcb81610fa5565b92915050565b6000819050919050565b610fe481610fd1565b8114610fef57600080fd5b50565b60008135905061100181610fdb565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261102c5761102b611007565b5b8235905067ffffffffffffffff8111156110495761104861100c565b5b60208301915083600182028301111561106557611064611011565b5b9250929050565b6000806000806060858703121561108657611085610f69565b5b600061109487828801610fbc565b94505060206110a587828801610ff2565b935050604085013567ffffffffffffffff8111156110c6576110c5610f6e565b5b6110d287828801611016565b925092505092959194509250565b600080fd5b600061016082840312156110fc576110fb6110e0565b5b81905092915050565b6000819050919050565b61111881611105565b811461112357600080fd5b50565b6000813590506111358161110f565b92915050565b6000806000806080858703121561115557611154610f69565b5b600085013567ffffffffffffffff81111561117357611172610f6e565b5b61117f878288016110e5565b945050602061119087828801611126565b93505060406111a187828801610fbc565b92505060606111b287828801610ff2565b91505092959194509250565b6000602082840312156111d4576111d3610f69565b5b60006111e284828501610fbc565b91505092915050565b60006111f682610f73565b9050919050565b611206816111eb565b811461121157600080fd5b50565b600081359050611223816111fd565b92915050565b600080604083850312156112405761123f610f69565b5b600061124e85828601611214565b925050602061125f85828601610ff2565b9150509250929050565b61127281610f93565b82525050565b600060208201905061128d6000830184611269565b92915050565b61129c81610fd1565b82525050565b60006020820190506112b76000830184611293565b92915050565b6000819050919050565b60006112e26112dd6112d884610f73565b6112bd565b610f73565b9050919050565b60006112f4826112c7565b9050919050565b6000611306826112e9565b9050919050565b611316816112fb565b82525050565b6000602082019050611331600083018461130d565b92915050565b60008083601f84011261134d5761134c611007565b5b8235905067ffffffffffffffff81111561136a5761136961100c565b5b60208301915083602082028301111561138657611385611011565b5b9250929050565b60008083601f8401126113a3576113a2611007565b5b8235905067ffffffffffffffff8111156113c0576113bf61100c565b5b6020830191508360208202830111156113dc576113db611011565b5b9250929050565b600080600080604085870312156113fd576113fc610f69565b5b600085013567ffffffffffffffff81111561141b5761141a610f6e565b5b61142787828801611337565b9450945050602085013567ffffffffffffffff81111561144a57611449610f6e565b5b6114568782880161138d565b925092505092959194509250565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126114905761148f611464565b5b80840192508235915067ffffffffffffffff8211156114b2576114b1611469565b5b6020830192506001820236038313156114ce576114cd61146e565b5b509250929050565b600081905092915050565b50565b60006114f16000836114d6565b91506114fc826114e1565b600082019050919050565b6000611512826114e4565b9150819050919050565b611525816111eb565b82525050565b6000604082019050611540600083018561151c565b61154d6020830184611293565b9392505050565b60008151905061156381610fdb565b92915050565b60006020828403121561157f5761157e610f69565b5b600061158d84828501611554565b91505092915050565b600082825260208201905092915050565b7f77726f6e67206172726179206c656e6774687300000000000000000000000000600082015250565b60006115dd601383611596565b91506115e8826115a7565b602082019050919050565b6000602082019050818103600083015261160c816115d0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061167c82610fd1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036116ae576116ad611642565b5b600182019050919050565b7f6f6e6c79206f776e657200000000000000000000000000000000000000000000600082015250565b60006116ef600a83611596565b91506116fa826116b9565b602082019050919050565b6000602082019050818103600083015261171e816116e2565b9050919050565b600081519050919050565b60005b8381101561174e578082015181840152602081019050611733565b60008484015250505050565b600061176582611725565b61176f81856114d6565b935061177f818560208601611730565b80840191505092915050565b6000611797828461175a565b915081905092915050565b7f77616c6c65743a206e6f742066726f6d20456e747279506f696e740000000000600082015250565b60006117d8601b83611596565b91506117e3826117a2565b602082019050919050565b60006020820190508181036000830152611807816117cb565b9050919050565b7f77616c6c65743a2077726f6e67207369676e6174757265000000000000000000600082015250565b6000611844601783611596565b915061184f8261180e565b602082019050919050565b6000602082019050818103600083015261187381611837565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061189d8261187a565b91506bffffffffffffffffffffffff82036118bb576118ba611642565b5b600182019050919050565b7f77616c6c65743a20696e76616c6964206e6f6e63650000000000000000000000600082015250565b60006118fc601583611596565b9150611907826118c6565b602082019050919050565b6000602082019050818103600083015261192b816118ef565b9050919050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000611973601c83611932565b915061197e8261193d565b601c82019050919050565b6000819050919050565b6119a461199f82611105565b611989565b82525050565b60006119b582611966565b91506119c18284611993565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611a35601883611596565b9150611a40826119ff565b602082019050919050565b60006020820190508181036000830152611a6481611a28565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611aa1601f83611596565b9150611aac82611a6b565b602082019050919050565b60006020820190508181036000830152611ad081611a94565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b33602283611596565b9150611b3e82611ad7565b604082019050919050565b60006020820190508181036000830152611b6281611b26565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611bc5602283611596565b9150611bd082611b69565b604082019050919050565b60006020820190508181036000830152611bf481611bb8565b9050919050565b611c0481611105565b82525050565b600060ff82169050919050565b611c2081611c0a565b82525050565b6000608082019050611c3b6000830187611bfb565b611c486020830186611c17565b611c556040830185611bfb565b611c626060830184611bfb565b9594505050505056fea2646970667358221220cd2a94bebe08079a48d63659713a86dbfc005a3fa996d84516a12645b4aab25664736f6c63430008110033a2646970667358221220503f7c0d12ade09f1f1cd16535cc7f0b058d94e47713f2d16c79ecef5016aaad64736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MyWalletDeployerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MyWalletDeployer;
}
export {};
