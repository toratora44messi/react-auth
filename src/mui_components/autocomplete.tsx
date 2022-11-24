//import * as React from 'react'; //全てを表す ビルド時に誇大化する
import React from 'react';//デフォルトインポート
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Autocomplete_selector = () => {
    return(
        <>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={restrictValue}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="権限" />}
        />
        </>
    );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const restrictValue = [
    { label: 'ALLOW', discription: '利用可' },
    { label: 'RESTRICT', discription: '権限なし要認証‗表示' },
    { label: 'HIDE', discription: '権限なし‗非表示' },
    { label: 'WARNING', discription: '注意' }
];

export default Autocomplete_selector
