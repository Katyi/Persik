type Post = {
  id: number;
  title: string;
  body: string;
};

interface screenSizeProps {
  width: number | undefined,
  height: number | undefined,
}

interface PaginationProps {
  items: number;
  pageSize: number;
  currentPage?: number;
  pageNumber?: number | undefined;
  onPageChange: (page: number) => void;
  // onPageChange: any;

}