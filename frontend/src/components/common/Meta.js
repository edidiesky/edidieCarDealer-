import React from 'react'
import {Helmet} from "react-helmet";
import Styled from 'styled-components'
const MetaContainer = Styled.div`
width:100%;
.MetaWrapper {

}
` 
export default function Meta({title, keyword, description}) {


	return (
		<Helmet>
            <title>{title}</title>
            <meta name="keyword" keyword={keyword} />
            <meta name="description" description={description} />
        </Helmet>
		)
}


Meta.defaultProps = {
	title:'Welcome to Ava shop- Home of Afforadble and durable car products',
	description:'We sell qualtiy Cars',
	keyword:'Cars, buy quality Cars, rare ones'
}

