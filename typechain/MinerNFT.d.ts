/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common"

interface MinerNFTInterface extends ethers.utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment
    "balanceOf(address)": FunctionFragment
    "baseExtension()": FunctionFragment
    "baseURI()": FunctionFragment
    "cost()": FunctionFragment
    "getApproved(uint256)": FunctionFragment
    "isApprovedForAll(address,address)": FunctionFragment
    "lock()": FunctionFragment
    "locked()": FunctionFragment
    "maxSupply()": FunctionFragment
    "mint(address)": FunctionFragment
    "name()": FunctionFragment
    "nominateNewOwner(address)": FunctionFragment
    "nominatedOwner()": FunctionFragment
    "owner()": FunctionFragment
    "ownerOf(uint256)": FunctionFragment
    "removeWhitelistUser(address)": FunctionFragment
    "safeTransferFrom(address,address,uint256)": FunctionFragment
    "setApprovalForAll(address,bool)": FunctionFragment
    "setBaseExtension(string)": FunctionFragment
    "setBaseURI(string)": FunctionFragment
    "setCost(uint256)": FunctionFragment
    "supportsInterface(bytes4)": FunctionFragment
    "symbol()": FunctionFragment
    "tokenByIndex(uint256)": FunctionFragment
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment
    "tokenURI(uint256)": FunctionFragment
    "totalSupply()": FunctionFragment
    "transferFrom(address,address,uint256)": FunctionFragment
    "transferOwnership()": FunctionFragment
    "unlock()": FunctionFragment
    "walletOfOwner(address)": FunctionFragment
    "whitelistUser(address)": FunctionFragment
    "whitelisted(address)": FunctionFragment
    "withdraw()": FunctionFragment
  }

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string
  encodeFunctionData(
    functionFragment: "baseExtension",
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string
  encodeFunctionData(functionFragment: "cost", values?: undefined): string
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string],
  ): string
  encodeFunctionData(functionFragment: "lock", values?: undefined): string
  encodeFunctionData(functionFragment: "locked", values?: undefined): string
  encodeFunctionData(functionFragment: "maxSupply", values?: undefined): string
  encodeFunctionData(functionFragment: "mint", values: [string]): string
  encodeFunctionData(functionFragment: "name", values?: undefined): string
  encodeFunctionData(
    functionFragment: "nominateNewOwner",
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: "nominatedOwner",
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "removeWhitelistUser",
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean],
  ): string
  encodeFunctionData(
    functionFragment: "setBaseExtension",
    values: [string],
  ): string
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string
  encodeFunctionData(
    functionFragment: "setCost",
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike],
  ): string
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: "unlock", values?: undefined): string
  encodeFunctionData(
    functionFragment: "walletOfOwner",
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: "whitelistUser",
    values: [string],
  ): string
  encodeFunctionData(functionFragment: "whitelisted", values: [string]): string
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "baseExtension",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "cost", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "maxSupply", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "nominateNewOwner",
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: "nominatedOwner",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "removeWhitelistUser",
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: "setBaseExtension",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setCost", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: "walletOfOwner",
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: "whitelistUser",
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: "whitelisted", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result

  events: {
    "Approval(address,address,uint256)": EventFragment
    "ApprovalForAll(address,address,bool)": EventFragment
    "IsLocked(bool)": EventFragment
    "NewOwnerNominated(address)": EventFragment
    "OwnershipTransferred(address)": EventFragment
    "Transfer(address,address,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment
  getEvent(nameOrSignatureOrTopic: "IsLocked"): EventFragment
  getEvent(nameOrSignatureOrTopic: "NewOwnerNominated"): EventFragment
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string
    approved: string
    tokenId: BigNumber
  }
>

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean] & {
    owner: string
    operator: string
    approved: boolean
  }
>

export type IsLockedEvent = TypedEvent<[boolean] & { lock_status: boolean }>

export type NewOwnerNominatedEvent = TypedEvent<[string] & { nominee: string }>

export type OwnershipTransferredEvent = TypedEvent<
  [string] & { newOwner: string }
>

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; tokenId: BigNumber }
>

export class MinerNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: MinerNFTInterface

  functions: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>

    baseExtension(overrides?: CallOverrides): Promise<[string]>

    baseURI(overrides?: CallOverrides): Promise<[string]>

    cost(overrides?: CallOverrides): Promise<[BigNumber]>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    lock(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    locked(overrides?: CallOverrides): Promise<[boolean]>

    maxSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    mint(
      _to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    name(overrides?: CallOverrides): Promise<[string]>

    nominateNewOwner(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    removeWhitelistUser(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setBaseExtension(
      _newBaseExtension: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setBaseURI(
      _newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setCost(
      _newCost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    transferOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    unlock(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    walletOfOwner(
      _owner: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>

    whitelistUser(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    whitelisted(arg0: string, overrides?: CallOverrides): Promise<[boolean]>

    withdraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>
  }

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

  baseExtension(overrides?: CallOverrides): Promise<string>

  baseURI(overrides?: CallOverrides): Promise<string>

  cost(overrides?: CallOverrides): Promise<BigNumber>

  getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>

  lock(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  locked(overrides?: CallOverrides): Promise<boolean>

  maxSupply(overrides?: CallOverrides): Promise<BigNumber>

  mint(
    _to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  nominateNewOwner(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  nominatedOwner(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  removeWhitelistUser(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setBaseExtension(
    _newBaseExtension: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setBaseURI(
    _newBaseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setCost(
    _newCost: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>

  symbol(overrides?: CallOverrides): Promise<string>

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  transferOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  unlock(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  walletOfOwner(_owner: string, overrides?: CallOverrides): Promise<BigNumber[]>

  whitelistUser(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  whitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>

  withdraw(
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  callStatic: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    baseExtension(overrides?: CallOverrides): Promise<string>

    baseURI(overrides?: CallOverrides): Promise<string>

    cost(overrides?: CallOverrides): Promise<BigNumber>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>

    lock(overrides?: CallOverrides): Promise<void>

    locked(overrides?: CallOverrides): Promise<boolean>

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>

    mint(_to: string, overrides?: CallOverrides): Promise<void>

    name(overrides?: CallOverrides): Promise<string>

    nominateNewOwner(_address: string, overrides?: CallOverrides): Promise<void>

    nominatedOwner(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    removeWhitelistUser(_user: string, overrides?: CallOverrides): Promise<void>

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides,
    ): Promise<void>

    setBaseExtension(
      _newBaseExtension: string,
      overrides?: CallOverrides,
    ): Promise<void>

    setBaseURI(_newBaseURI: string, overrides?: CallOverrides): Promise<void>

    setCost(_newCost: BigNumberish, overrides?: CallOverrides): Promise<void>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>

    symbol(overrides?: CallOverrides): Promise<string>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    transferOwnership(overrides?: CallOverrides): Promise<void>

    unlock(overrides?: CallOverrides): Promise<void>

    walletOfOwner(
      _owner: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>

    whitelistUser(_user: string, overrides?: CallOverrides): Promise<void>

    whitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>

    withdraw(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; approved: string; tokenId: BigNumber }
    >

    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; approved: string; tokenId: BigNumber }
    >

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; operator: string; approved: boolean }
    >

    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; operator: string; approved: boolean }
    >

    "IsLocked(bool)"(
      lock_status?: null,
    ): TypedEventFilter<[boolean], { lock_status: boolean }>

    IsLocked(
      lock_status?: null,
    ): TypedEventFilter<[boolean], { lock_status: boolean }>

    "NewOwnerNominated(address)"(
      nominee?: null,
    ): TypedEventFilter<[string], { nominee: string }>

    NewOwnerNominated(
      nominee?: null,
    ): TypedEventFilter<[string], { nominee: string }>

    "OwnershipTransferred(address)"(
      newOwner?: null,
    ): TypedEventFilter<[string], { newOwner: string }>

    OwnershipTransferred(
      newOwner?: null,
    ): TypedEventFilter<[string], { newOwner: string }>

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; tokenId: BigNumber }
    >

    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; tokenId: BigNumber }
    >
  }

  estimateGas: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    baseExtension(overrides?: CallOverrides): Promise<BigNumber>

    baseURI(overrides?: CallOverrides): Promise<BigNumber>

    cost(overrides?: CallOverrides): Promise<BigNumber>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    lock(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    locked(overrides?: CallOverrides): Promise<BigNumber>

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>

    mint(
      _to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    nominateNewOwner(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    removeWhitelistUser(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setBaseExtension(
      _newBaseExtension: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setBaseURI(
      _newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setCost(
      _newCost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    transferOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    unlock(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    walletOfOwner(_owner: string, overrides?: CallOverrides): Promise<BigNumber>

    whitelistUser(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    whitelisted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    withdraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    balanceOf(
      owner: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    baseExtension(overrides?: CallOverrides): Promise<PopulatedTransaction>

    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>

    cost(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    lock(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    locked(overrides?: CallOverrides): Promise<PopulatedTransaction>

    maxSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    mint(
      _to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    nominateNewOwner(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    removeWhitelistUser(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setBaseExtension(
      _newBaseExtension: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setBaseURI(
      _newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setCost(
      _newCost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    transferOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    unlock(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    walletOfOwner(
      _owner: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    whitelistUser(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    whitelisted(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    withdraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>
  }
}
