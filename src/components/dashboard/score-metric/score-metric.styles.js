import { styled } from "@mui/material";
import { Row } from "components/shared/shared.styles";

export const ScoreCardWrapper = styled(Row)`
    padding: 15px;
    background-color: #24252D;
    border: 1px solid ${({ theme }) => theme.palette.grey[300] };
    height: 180px;
    justify-content: flex-start;
    column-gap: 10px;
    color: white;
`