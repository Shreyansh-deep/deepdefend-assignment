import { styled } from "@mui/material";

export const Row = styled('div')`
    display: flex;
    align-items: ${({alignItems}) => alignItems || 'center'};
    justify-content: ${({justifyContent}) => justifyContent || 'center'};
`

export const Column = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: ${({alignItems}) => alignItems || 'center'};
    justify-content: ${({justifyContent}) => justifyContent || 'center'};
`
