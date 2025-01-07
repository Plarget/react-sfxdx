import getHexInteger from "@/shared/utils/getHexInteger";
import {BrowserProvider} from "ethers";
import {AMOY_POLYGON_PARAMS} from "@/shared/constants/server.ts";

const connectServices = {
  connectMetamask: async () => {
    await window.ethereum.request({method: 'eth_requestAccounts'});

    const provider = new BrowserProvider(window.ethereum);
    await connectServices.checkCurrentChain(provider)

    return await connectServices.getAddress(provider);
  },

  isNotExistChainError: (error: unknown) => {
    if (typeof error !== 'object' || !error) return false;

    if (!('code' in error)) return false;

    return error.code === 4902
  },

  getAddress: async (provider: BrowserProvider) => {
    const signer = await provider.getSigner();
    return await signer.getAddress()
  },

  checkCurrentChain: async (provider: BrowserProvider) => {
    const {chainId} = await provider.getNetwork()
    const hexChainId = getHexInteger(chainId)

    if (hexChainId.toLowerCase() !== AMOY_POLYGON_PARAMS.chainId.toLowerCase()) {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{chainId: AMOY_POLYGON_PARAMS.chainId}],
      })
        .catch((switchError: unknown) => {
          if (connectServices.isNotExistChainError(switchError)) {
            window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [AMOY_POLYGON_PARAMS],
            });
          }
        })
    }
  }
}

export default connectServices