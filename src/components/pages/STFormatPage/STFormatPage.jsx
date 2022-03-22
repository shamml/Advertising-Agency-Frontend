import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSTFormat } from '../../../redux/features/stformat'
import STformatCard from './STformatCard'
import styles from './STFormats.module.css'

const StFormatPage = () => {
  const dispatch = useDispatch()

  const STFormats = useSelector(state => state.stformat.items)

  useEffect(() => {
    dispatch(fetchSTFormat())
  }, [dispatch])

  return (
    <div className={styles.STFormatMain}>
      {STFormats.map(STFormat => {
        return <STformatCard STFormat={STFormat} key={STFormat._id}/>
      })}
    </div>
  )
};

export default StFormatPage;