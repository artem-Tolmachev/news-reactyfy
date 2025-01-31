// HOC (Higher-Order Component компонент высшего порядка) в React — это паттерн для повторного использования логики в компонентах. HOC — это функция, которая принимает компонент и возвращает новый компонент с дополнительными свойствами или логикой.
// HOC часто используются для:
// Обработки авторизации (withAuth)
// Добавления данных из API (withData)
// Логирования (withLogger)
// Обработки состояний (withState)

import Skeleoton from '../../components/Sceleton/Sceleton';

function withSkeleton(Component, type, count){

    return function withSkeleton(props){
        const {isLoading, ...restProps} = props;

        if(isLoading) {
            return <Skeleoton type={type} count={count}/>;
        }

        return <Component {...restProps}/>;
    }
}
export default withSkeleton;