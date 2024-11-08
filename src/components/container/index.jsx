import { cn } from '../../utils/shadcn';
import Styles from './container.module.css';
export function Container({
  children,
  isFluid = false,
  isNoPadding = false,
}) {
  const containerClasses = cn(
    [Styles['container']],
    { [Styles['full-width']]: isFluid },
    { [Styles['no-padding']]: isNoPadding },
    
  );
  return <div className={containerClasses}>{children}</div>;
}
