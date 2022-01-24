import { BasicTooltip, Chip } from "@nivo/tooltip";
import { DefaultLink, DefaultNode, SankeyLinkDatum } from "./types";

const tooltipStyles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  sourceChip: {
    marginRight: 7,
  },
  targetChip: {
    marginLeft: 7,
    marginRight: 7,
  },
};

export interface SankeyLinkTooltipProps<
  N extends DefaultNode,
  L extends DefaultLink
> {
  link: SankeyLinkDatum<N, L>;
}

export const SankeyLinkTooltip = <
  N extends DefaultNode,
  L extends DefaultLink
>({
  link,
}: SankeyLinkTooltipProps<N, L>) => (
  <BasicTooltip
    id={
      <span style={tooltipStyles.container}>
        {link.source.id} {"->"} {link.target.id}
        {/* <strong>{link.formattedValue}</strong> */}
      </span>
    }
  />
);
