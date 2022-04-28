import JSBI from 'jsbi'

export enum SupportedChainId {
  MAINNET = 9001,
  EVMOS_TESTNET = 9000,
  RINKEBY = 4
}

export const FACTORY_ADDRESS = '0x20570b7bFf86B2f92068622D0805160f318554Be'

export const FACTORY_ADDRESSES = {
  [SupportedChainId.MAINNET]: '0x20570b7bFf86B2f92068622D0805160f318554Be',
  [SupportedChainId.EVMOS_TESTNET]: '0x3Dc30d756A1382BF454dD6bDb48b7225CA214bB3',
  [SupportedChainId.RINKEBY]: '0x96a7c17FE97AB9F2f96399Ab15544C187B23b110'
}

export const INIT_CODE_HASH = '0xc2c769f6cbfb568ac8562fb6e250ca27d65a3c02c8276593bd86244d6d5c6001'
export const INIT_CODE_HASHES = {
  [SupportedChainId.MAINNET]: '0xc2c769f6cbfb568ac8562fb6e250ca27d65a3c02c8276593bd86244d6d5c6001',
  [SupportedChainId.EVMOS_TESTNET]: '0xea9645804ac90dfacad95722451893fc85c951fe30990c9c577bb1b636522211',
  [SupportedChainId.RINKEBY]: '0xea9645804ac90dfacad95722451893fc85c951fe30990c9c577bb1b636522211'
}
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
