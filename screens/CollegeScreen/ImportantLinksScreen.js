import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LinkCard } from '../../components/LinkCard'

export const ImportantLinksScreen = () => {

  return (
    <View style={styles.container}>
      <LinkCard title={"LNMIIT Official Website"} link={"https://www.lnmiit.ac.in/"} />
      <LinkCard title={"Scholarship Policy"} link={"https://admissions.lnmiit.ac.in/ug/Scholarship-Assistantship.html"} />
      <LinkCard title={"Fee Structure - UG Admissions"} link={"https://admissions.lnmiit.ac.in/ug/regular-mode.html"} />
      <LinkCard title={"Training and Placement Cell"} link={"https://placements.lnmiit.ac.in/"} />
      <LinkCard title={"New UG Admission Portal"} link={"https://admissions.lnmiit.ac.in/ug/"} />
      <LinkCard title={"MIS Portal"} link={"https://erp.lnmiit.ac.in/mis/iitmsv4eGq0RuNHb0G5WbhLmTKLmTO7YBcJ4RHuXxCNPvuIw=?enc=g4R9l5ijEYlvf3Kt0STjKQ=="} />
      <LinkCard title={"Moodle LNMIIT"} link={"https://moodle.lnmiit.ac.in/moodle/login/index.php"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  }
})
