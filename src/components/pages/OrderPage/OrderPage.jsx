import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../redux/features/order';
import styles from './OrderPage.css'

function OrderPage() {
    const dispatch = useDispatch()
    const rents = useSelector(state => state.order.orders.rents)
    const loading = useSelector(state => state.order.loading)
    console.log(rents)

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    return (
        <>
        {loading ? <div>..Загрузка</div> : <div className={styles.containerOrders}>
            {rents.map(rent => {
                return (
                    <>
                    <div>{rent.name}</div>
                    <div>{rent.price}</div>
                    <div>{rent.address}</div>
                    <div>{rent.sideA}</div>
                    <div>{rent.sideB}</div>
                    <div>{rent.image}</div>
                    </>
                )
            })}
        </div>}
        </>
    );
}

export default OrderPage;