import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GymkhanaScreen from '../screens/GymkhanaScreen/GymkhanaScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Header from '../components/Header';
import PresidentialCouncilScreen from '../screens/GymkhanaScreen/PresidentialCouncilScreen';
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

export default function GymkhanaTab() {
  const GymkhanaStack = createStackNavigator();
  return (
    <GymkhanaStack.Navigator>
      <GymkhanaStack.Screen name="Student's Gymkhana" component={GymkhanaScreen} options={{
        headerTitle: () => <Header title={"Student's Gymkhana"} />
      }} />
      <GymkhanaStack.Screen name="Settings" component={SettingsScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Meet our Developers" component={DevelopersScreen} options={{
        headerTitleAlign: 'center',
      }} />
      <GymkhanaStack.Screen name="Presidential Council" component={PresidentialCouncilScreen} options={{
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
    </GymkhanaStack.Navigator>
  )
}
