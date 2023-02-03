import { PartialType } from "@nestjs/mapped-types";
import { SearchParams } from "./search-params.dta";

export class searchParamsUser extends PartialType(SearchParams) {
    show?: string;
    name?: string;
    email?: string;
    showRole?: boolean;
}
