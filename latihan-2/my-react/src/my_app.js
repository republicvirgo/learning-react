import React from 'react';
//import Profile from './components/Profile';
//import ComponentLifeCycle from './components/ComponentLifeCycle';
import Coffee from './components/Coffee';

// pilihan 1
// const my_app = ()=> { ... }
// export default my_app;

// pilihan 2
// export default ()=> { ... }
// nama componen akan otomatis sesuai nama filenya jika tidak di tentukan

// gunakan pilihan 2
export default ()=> {
	//const hello = 'hello world...!';
	//const Amazing = 'amazing world...!';

	return (
		<div>
			{/*
			<p>{hello}</p>
			<p>{Amazing}</p>

			<Profile/>

			<ComponentLifeCycle/>
			*/}

			<Coffee 
				bean="Robusta" 
				volume={1} 
				type="Expresso" 
				color="red" 
				margin={50} 
				fontWeight="bold"
			/>
		</div>
	);
}