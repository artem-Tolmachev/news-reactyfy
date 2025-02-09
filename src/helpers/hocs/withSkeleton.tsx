// HOC (Higher-Order Component компонент высшего порядка) в React — это паттерн для повторного использования логики в компонентах. HOC — это функция, которая принимает компонент и возвращает новый компонент с дополнительными свойствами или логикой.
// HOC часто используются для:
// Обработки авторизации (withAuth)
// Добавления данных из API (withData)
// Логирования (withLogger)
// Обработки состояний (withState)

import Skeleoton from '../../components/Sceleton/Sceleton';
import { DirectionType, SkeletonType } from '../../interfaces';

interface Props {
    isLoading: boolean; 
}

function withSkeleton<P extends object>(
    Component: React.ComponentType<P>, 
    type?: SkeletonType, 
    count?: number, 
    direction?: DirectionType
){
    return function withSkeleton(props: Props & P){
        const {isLoading, ...restProps} = props;
 
        if(isLoading) {
            return <Skeleoton type={type} count={count} direction={direction}/>;
        }
        return <Component {...(restProps as P)}/>;
    }
}
export default withSkeleton;