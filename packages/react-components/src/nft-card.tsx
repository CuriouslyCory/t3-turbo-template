import * as React from "react";

import type { NFT } from "@sudoswap/react-hooks";

import { cn } from ".";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./card";

const NftCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { nft: NFT }
>(({ nft, children, className, ...props }, ref) => {
  return (
    <Card ref={ref} className={cn("p-4", className)} {...props}>
      {children}
    </Card>
  );
});
NftCard.displayName = "NftCard";

const NftCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { nft: NFT }
>(({ className, ...props }, ref) => (
  <CardTitle ref={ref} className={cn("", className)} {...props}>
    {props.nft.name}
  </CardTitle>
));
NftCardTitle.displayName = "NftCardTitle";

const NftCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { nft: NFT }
>(({ className, ...props }, ref) => (
  <CardDescription ref={ref} className={cn("", className)} {...props} />
));
NftCardDescription.displayName = "NftCardDescription";

const NftCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { nft: NFT }
>(({ className, ...props }, ref) => (
  <CardContent ref={ref} className={cn("rounded-md p-0", className)} {...props}>
    <img src={props.nft.image} />
  </CardContent>
));
NftCardContent.displayName = "NftCardContent";

const NftCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { nft: NFT }
>(({ className, ...props }, ref) => (
  <CardFooter
    ref={ref}
    className={cn("flex flex-col items-start p-0", className)}
    {...props}
  >
    <span className="text-sudo-dark-shade-50 pt-2 ">#5512</span>
    <span className="">Remilio 5514</span>
    <span className="pt-4 text-sm">0.569 ETH</span>
  </CardFooter>
));
NftCardFooter.displayName = "NftCardFooter";

const NftCardBasic = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { nft: NFT }
>(({ className, children, ...props }, ref) => {
  return (
    <NftCard
      ref={ref}
      className={cn(
        "hover:bg-sudo-dark-shade-8  bg-sudo-dark-shade-4 w-44 rounded-xl border border-white border-opacity-20 p-3",
        className,
      )}
      {...props}
    >
      <NftCardContent {...props}></NftCardContent>
      {children}
      <NftCardFooter {...props}></NftCardFooter>
    </NftCard>
  );
});
NftCardBasic.displayName = "NftCardBasic";

export {
  NftCard,
  NftCardFooter,
  NftCardTitle,
  NftCardDescription,
  NftCardContent,
  NftCardBasic,
};
