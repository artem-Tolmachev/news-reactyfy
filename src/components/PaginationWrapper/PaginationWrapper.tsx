import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination/Pagination";
import { ReactNode } from "react";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

const PaginationWrapper = ({top, bottom, children, ...PaginationProps}: Props & IPaginationProps) => {
   
    return(
        <>
          {top && <Pagination {...PaginationProps}/>}
            {children}
          {bottom && <Pagination {...PaginationProps}/>}
        </>
    )
}

export default PaginationWrapper;