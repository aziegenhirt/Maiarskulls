import * as Dapp from "@elrondnetwork/dapp";

export const dAppName = "Maiar Skulls";
export const decimals = 2;
export const denomination = 18;
export const gasPrice = 1000000000;
export const version = 1;
export const gasLimit = 60000000;
export const gasPerDataByte = 1500;

export const walletConnectBridge = "https://bridge.walletconnect.org";
export const walletConnectDeepLink =
  "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/";

export const contractAddress =
  "erd1qqqqqqqqqqqqqpgqy59emf5d52y325rdtyqr43d46xmq6jg94l8q3m95e0";
export const bech32ContractAddress =
  "00000000000000000500250b9da68da28915506d59003ac5b5d1b60d4905afce";

export const network: Dapp.NetworkType = {
  id: "mainnet",
  name: "Mainnet",
  egldLabel: "EGLD",
  walletAddress: "https://wallet.elrond.com",
  apiAddress: "https://api.elrond.com",
  gatewayAddress: "https://gateway.elrond.com",
  explorerAddress: "http://explorer.elrond.com/",
};
