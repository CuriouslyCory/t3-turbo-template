"use client";
import * as React from "react";

type Props = {
  address: string;
  tokenId: string;
};

export type Collection = {
  address: string;
  type: "ERC721" | "ERC1155" | "UNKNOWN";
  image?: string;
};

export type NFT = {
  name: string;
  description: string;
  image?: string;
  collection: Collection;
  owner?: string;
  chainId: number;
  tokenId: string;
  tokenURI: string;
};

export const useNftItem = ({ address, tokenId }: Props) => {
  const [nftItem, setnftItem] = React.useState<NFT>({
    name: "Happy Little Trees",
    description: "Bob Ross Inspired NFT Collection",
    collection: { address: "0x0000eeeeeeeeeeeee00000", type: "ERC721" },
    chainId: 0,
    tokenId,
    tokenURI: "ifps://ipfs.io/ipfs/QmXyZ",
    image:
      "https://nft-media.defined.fi/thumbLg/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab:5514:1.webp",
  });
  return { nftItem };
};
