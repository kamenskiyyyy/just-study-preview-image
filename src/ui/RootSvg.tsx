import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import {Ref, SVGProps} from "react";

export type RootSvgProps<P = unknown> = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
    sx?: SxProps<Theme>;
    ref?: Ref<SVGSVGElement>;
} & P;

const Svg = styled('svg')({
    verticalAlign: 'bottom'
});

export default Svg;
