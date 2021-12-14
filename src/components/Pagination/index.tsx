import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import styles from '../../global/pagination.less';
import cls from 'classnames';
interface PaginationProps {
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
  className?: string;
}
export default function PaginationPage(props: PaginationProps) {
  const { total, pageSize, className, onChange } = props;

  const handleChangePage = (page: number, pageSize: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onChange(page, pageSize);
  };

  return (
    <Pagination
      total={total}
      pageSize={pageSize}
      className={cls([styles.pagination, className])}
      onChange={handleChangePage}
    />
  );
}
