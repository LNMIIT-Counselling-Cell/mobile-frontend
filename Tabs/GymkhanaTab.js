import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GymkhanaScreen from '../screens/GymkhanaScreen/GymkhanaScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import CulturalCouncilScreen from '../screens/GymkhanaScreen/CulturalCouncilScreen';
import ScitechCouncilScreen from '../screens/GymkhanaScreen/ScitechCouncilScreen';
import SportsCouncilScreen from '../screens/GymkhanaScreen/SportsCouncilScreen';
import CoshaCommitteeScreen from '../screens/GymkhanaScreen/CoshaCommitteeScreen';
import { AavegScreen } from '../screens/GymkhanaScreen/AavegScreen';
import { CapriccioScreen } from '../screens/GymkhanaScreen/CapriccioScreen';
import { EminenceScreen } from '../screens/GymkhanaScreen/EninenceScreen';
import { ImaginationScreen } from '../screens/GymkhanaScreen/ImaginationScreen';
import { InsigniaScreen } from '../screens/GymkhanaScreen/InsigniaScreen';
import { LCScreen } from '../screens/GymkhanaScreen/LCScreen';
import { MediaCellScreen } from '../screens/GymkhanaScreen/MediaCellScreen';
import { RenditionScreen } from '../screens/GymkhanaScreen/RenditionScreen';
import { SankalpScreen } from '../screens/GymkhanaScreen/SankalpScreen';
import { VignetteScreen } from '../screens/GymkhanaScreen/VignetteScreen';
import { AstronomyScreen } from '../screens/GymkhanaScreen/AstronomyScreen';
import { CybrosScreen } from '../screens/GymkhanaScreen/CybrosScreen';
import { DebsocScreen } from '../screens/GymkhanaScreen/DebsocScreen';
import { PhoenixScreen } from '../screens/GymkhanaScreen/PhoenixScreen';
import { EcellScreen } from '../screens/GymkhanaScreen/EcellScreen';
import { QuizzingaScreen } from '../screens/GymkhanaScreen/QuizzingaScreen';
import { CipherScreen } from '../screens/GymkhanaScreen/CipherScreen';
import { VivacityScreen } from '../screens/GymkhanaScreen/VivacityScreen';
import { PlinthScreen } from '../screens/GymkhanaScreen/PlinthScreen';
import { DespoScreen } from '../screens/GymkhanaScreen/DespoScreen';
import { DevelopersScreen } from '../screens/DevelopersScreen';
import { FundooScreen } from '../screens/GymkhanaScreen/FundooScreen';
import { BadmintonScreen } from '../screens/GymkhanaScreen/BadmintonScreen';
import { BasketballScreen } from '../screens/GymkhanaScreen/BasketballScreen';
import { ChessScreen } from '../screens/GymkhanaScreen/ChessScreen';
import { CricketScreen } from '../screens/GymkhanaScreen/CricketScreen';
import { FootballScreen } from '../screens/GymkhanaScreen/FootballScreen';
import { KabaddiScreen } from '../screens/GymkhanaScreen/KabaddiScreen';
import { TableTennisScreen } from '../screens/GymkhanaScreen/TableTennisScreen';
import { VolleyballScreen } from '../screens/GymkhanaScreen/VolleyballScreen';
import { OpenSourceLibScreen } from '../screens/OpenSourceLibScreen';
import { TennisScreen } from '../screens/GymkhanaScreen/TennisScreen';
import { SquashScreen } from '../screens/GymkhanaScreen/SquashScreen';

export default function GymkhanaTab() {
  const GymkhanaStack = createStackNavigator();
  return (
    <GymkhanaStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
      <GymkhanaStack.Screen name="Students' Gymkhana" component={GymkhanaScreen} options={{
        headerTitle: () => <Header title={"Student's Gymkhana"} />
      }} />
      <GymkhanaStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Cultural Council" component={CulturalCouncilScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Science & Technology Council" component={ScitechCouncilScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Sports Council" component={SportsCouncilScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="COSHA Committee" component={CoshaCommitteeScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Aaveg, The Nukkad Mandali" component={AavegScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Capriccio, The Music Club" component={CapriccioScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Eminence, The Fashion Club" component={EminenceScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Fundoo Club" component={FundooScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Imagination" component={ImaginationScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Insignia, The Dance Club" component={InsigniaScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Literary Committee" component={LCScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Media Cell" component={MediaCellScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Rendition, The Dramatics Club" component={RenditionScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Sankalp Club" component={SankalpScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Vignette, The Art Club" component={VignetteScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Astronomy Club" component={AstronomyScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Cybros" component={CybrosScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Debsoc" component={DebsocScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Phoenix" component={PhoenixScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="E-Cell" component={EcellScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Quizzinga" component={QuizzingaScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Cipher" component={CipherScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Vivacity" component={VivacityScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Plinth" component={PlinthScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Desportivos" component={DespoScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Badminton" component={BadmintonScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Basketball" component={BasketballScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Chess" component={ChessScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Cricket" component={CricketScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Football" component={FootballScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Kabaddi" component={KabaddiScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Table Tennis" component={TableTennisScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Tennis" component={TennisScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Squash" component={SquashScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Volleyball" component={VolleyballScreen} options={{
        headerTitleAlign: 'center',
      }} />
      {/* <GymkhanaStack.Screen name="Gymnasium" component={BadmintonScreen} options={{
        headerTitleAlign: 'center',
      }} /> */}
      {/* <GymkhanaStack.Screen name="Badminton" component={BadmintonScreen} options={{
        headerTitleAlign: 'center',
      }} /> */}
      <GymkhanaStack.Screen name="Open Source Libraries" component={OpenSourceLibScreen} options={{
        headerTitleAlign: 'center',
      }} />
    </GymkhanaStack.Navigator>
  )
}
