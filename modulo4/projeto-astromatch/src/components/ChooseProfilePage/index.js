import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChooseButtons from './ChooseButtons';
import ProfileCard from './ProfileCard';

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState({})

  const getProfile = () => {
    axios.get(' https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/person').then(response => {
      setProfileToChoose(response.data.profile)
    })
  }

  useEffect(() => {
    getProfile()

  }, []);

  const onClickN = () => {
    const body = {
      choice: false,
      id: profileToChoose.id
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/choose-person', body).then(response => {
      getProfile()
    })
  }

  const onClickY = () => {
    const body = {
      choice: true,
      id: profileToChoose.id
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/choose-person', body).then(response => {
      getProfile()
    })

  }


  return (
    <div >
      <ProfileCard profile={profileToChoose}/>
      <ChooseButtons
        onClickY={onClickY}
        onClickN={onClickN}
      />
    </div>
  );
}

export default ChooseProfilePage;
