import React from 'react';
import styles from './Location.module.scss';
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import map from '../../assets/map.jpg'

export const Location = ({}) =>{
  return (
  <div className={styles.location} >
  <h3>Вихід метро "Наукова" на строні макДоналдз </h3>
  <img className={styles.map} src={map} alt="Локація" />
  </div>
)};

 