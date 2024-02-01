"use client";

import { NftCardBasic } from "@sudoswap/react-components";
import { useNftItem } from "@sudoswap/react-hooks";

export const NftCardExample = () => {
  const { nftItem } = useNftItem({ address: "0x0000", tokenId: "1" });
  return <div>{nftItem && <NftCardBasic nft={nftItem} />}</div>;
};
