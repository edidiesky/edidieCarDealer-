import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Input} from '../forms'
import {useDispatch, useSelector} from 'react-redux'
import {UpdateProfile, clearUserAlertError, getSingleCustomer} from '../../Features'
import Message from '../loaders/Message'
import LoaderIndex from '../loaders'

export default function ProfileForm() {

  // user's state
  const {userDetails,userInfo, isLoading, isError, isSuccess, alertType, alertText} = useSelector(store=> store.user)
  const dispatch = useDispatch()

  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
    dispatch(getSingleCustomer(userInfo?._id))
  },[userInfo?._id])

    const [formdata, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',  
    country:'',
    isAdmin:'',
    phone:'',
    city:'',
    address:''
  })

    useEffect(()=> {
      // get the main users data once the profile page mounts
      if(userDetails){
        const {
     firstname,
    lastname,
    email,
    password,  
    country,
    isAdmin,
    phone,
    city,
    address
    } = userDetails
     setFormData({
    firstname,
    lastname,
    email,
    password,  
    country,
    isAdmin,
    phone,
    city,
    address
  })
      }
    }, [setFormData, userDetails])

  const inputData = [
 {id:1, name:'firstname', placeholder:'John', type:'text', text:'First name', 
 errorMessage:'firstname should be 3-16 characters and should not contain any special Characters', 
 required:true, 
 pattern:'^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$'
 },
 {id:2, name:'lastname', placeholder:'Doe', type:'text', text:'Last name', 
 errorMessage:'lastname should be 3-16 characters and should not contain any special Characters', 
 required:true, 
 pattern:'^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$'
 },
 {id:3, name:'email', placeholder:'example@site.com', type:'email', text:'Email', 
 errorMessage:'It should be a valid email', 
 required:true,
 },
 {id:4, name:'password', placeholder:'Minimum 8 Characters', type:'password', text:'password',
},
 {id:5, name:'phone', placeholder:'Doe', type:'text', text:'phone', 
 errorMessage:'phone should be 3-16 characters and should not contain any special Characters', 
 required:true, 
 },
{id:6, name:'country', placeholder:'country', type:'text', text:'Country', 
 errorMessage:'country should be 3-16 characters and should not contain any special Characters', 
 required:true, 
 pattern:'^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$'
 },
 {id:7, name:'city', placeholder:'city', type:'text', text:'city', 
 errorMessage:'city should be 3-16 characters and should not contain any special Characters', 
 required:true, 
 pattern:'^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$'
 },
 {id:8, name:'address', placeholder:'address', type:'text', text:'address', 
 errorMessage:'address should be 3-16 characters and should not contain any special Characters', 
 required:true,
 },
]

  const onChange = (e)=> {
    setFormData({...formdata, [e.target.name]:e.target.value})
  }


  // handling the users profile update
  const handleUpdateUserProfile = (e)=> {
    e.preventDefault()
    dispatch(UpdateProfile(formdata))
}

// useEffect(()=> {
//   if(isSuccess) {
//     setTimeout(()=> {
//       dispatch(clearUserAlertError())
//     }, 4000)
//   }
// }, [isSuccess])
  return (
    <ProfileFormContainer>
    {isLoading&& <LoaderIndex loading={isLoading}/>}
    {isError &&<Message alertText={alertText} alertType={alertType}/>}
    {isSuccess &&<Message alertText={'your profile has been succesfully updated'} alertType={'success'}/>}
      <>
      <h2>Update your Profile</h2>
      <form className='formWrapper' onSubmit={handleUpdateUserProfile}>
              <div className='profileFormBottom'>
             {inputData.slice(0,6).map(input=> {
              return <Input 
              id={input.text} 
              onChange={onChange} 
              placeholder={input.placeholder} 
              type={input.type}
              name={input.name}
              value={formdata[input.name]} 
              input={input} 
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
             })}

              </div>
              <div className='editUserProfileBottom'>
                <h3>Personal Address</h3>
                 <div className='profileFormBottom'>
             {inputData.slice(6,9).map(input=> {
              return <Input 
              id={input.text} 
              onChange={onChange} 
              placeholder={input.placeholder} 
              type={input.type}
              name={input.name}
              value={formdata[input.name]} 
              input={input} 
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
             })}

              </div>
              </div>
              <div className='btnWrapper'>
               <button type='submit' className='editBtn'>Edit Profile</button>
              </div>
            </form>
      </>
    </ProfileFormContainer>
  )
}

const ProfileFormContainer = styled.div`
width:100%;
border: 1px solid var(--grey-2);
padding:2rem;
 h2 {
  font-size: 4rem;
  font-weight: 600;
  color: var(--text-color);
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--grey-2);
  text-align:start;
  width:100%;
 }

 .formWrapper {
  padding: 2rem 0;
  width:100%;
  display: flex;  
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  .btnWrapper {
    width:100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .editBtn {
      border: none;
      outline: none;
      padding: 1.8rem 3rem;
      font-size: 1.8rem;
      color: var(--white);
      background-color: var(--red);
      cursor: pointer;
      &:hover {
        background-color: var(--blue-1);
      }
    }
  }
  .editUserProfileBottom {
      display:flex;
      flex-direction:column;
      gap:2rem;
      width:100%;
      padding:2.4rem 0;
      h3 {
        font-size:2.4rem;
        font-weight:600;
        color:var(--text-color);
      }
    }
  .profileFormBottom {
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem
  }
 }
`
