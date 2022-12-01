import React from 'react';
import { Calculator } from '../../components/Calculator/Calculator';
import { CurrencyTable } from '../../components/CurrencyTable/CurrencyTable';
import styles from './HomePage.module.scss';

export const HomePage = ({}) => (
  <div className={styles.homePage}>
<CurrencyTable/>

        <div className="container">
           
       <Calculator/>
        
    </div>

    

</div>
);

