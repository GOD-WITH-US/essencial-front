// == Import dépendances 
import React,{useContext} from 'react';

// == Import Composants
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';

// data, styles et utilitaires
import logimage from '../media/log.svg'


const Profil = () => {
    const uid = useContext(UidContext);
   
    return (
        <div className='profil-page' >
            {uid ? (
                
                <h1>UPDATE PAGE</h1>
            ) : (
               <div className="log-container">

                        {/* je passe en props une info true pour signin et false pour signup 
                        info que je vais retrouver de l'autre coté dans le component Log/index.js*/}
                        <Log signin={false} signup={true} />
                    <div className="img-container">
                        <img src={logimage} alt="img-login" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profil;