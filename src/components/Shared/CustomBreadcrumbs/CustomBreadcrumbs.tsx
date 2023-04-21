import { COLORS } from "@constants/theme.constant";
import { Breadcrumbs, Typography } from "@mui/material";
import { StyledLink } from "@styles/shared/CustomBreadcrumbs.style";
import { BreadcrumbsType } from "@typess/common.type";
import { memo } from "react";

type CustomBreadcrumbsProps = {
  breadcrumbs: BreadcrumbsType[];
};

export const CustomBreadcrumbs = memo(
  ({ breadcrumbs }: CustomBreadcrumbsProps) => {
    return (
      <Breadcrumbs separator="›">
        {breadcrumbs.map((breadcrumb, index) =>
          breadcrumb.path ? (
            <StyledLink key={index} to={breadcrumb.path}>
              {breadcrumb.name}
            </StyledLink>
          ) : (
            <Typography key={index} color={COLORS.BLACK_600} fontWeight={700}>
              {breadcrumb.name}
            </Typography>
          )
        )}
      </Breadcrumbs>
    );
  }
);
