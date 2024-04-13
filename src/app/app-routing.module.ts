import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { MainPageAvatarComponent } from './components/main-page-avatar/main-page-avatar.component';
import { CreateAvatarComponent } from './components/create-avatar/create-avatar.component';
import { EditPageAvatarComponent } from './components/edit-page-avatar/edit-page-avatar.component';
import { AvatarOverviewComponent } from './components/avatar-overview/avatar-overview.component';
import { TestgameComponent } from './components/testgame/testgame.component';
import { CreatePosterComponent } from './components/create-poster/create-poster.component';
import { EditPagePosterComponent } from './components/edit-page-poster/edit-page-poster.component';
import { EditPageStandComponent } from './components/edit-page-stand/edit-page-stand.component';
import { CreateStandComponent } from './components/create-stand/create-stand.component';
import { PosterOverviewComponent } from './components/poster-overview/poster-overview.component';
import  { StandOverviewComponent} from './components/stand-overview/stand-overview.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { EditPagePlayerComponent } from './components/edit-page-player/edit-page-player.component';
import { PlayerOverviewComponent } from './components/player-overview/player-overview.component';
import { MainPagePosterComponent } from './components/main-page-poster/main-page-poster.component';
import  {MainPagePlayerComponent}  from './components/main-page-player/main-page-player.component';
import { MainPageStandComponent } from './components/main-page-stand/main-page-stand.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TableAvatarComponent } from './table-avatar/table-avatar.component';
import { ChooseAvatarComponent } from './components/choose-avatar/choose-avatar.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'adminprofile', component: AdminProfileComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'chooseAvatar', component: ChooseAvatarComponent },
{ path: 'forgetpassword', component: ForgetPasswordComponent },
{ path: 'createavatar', component: CreateAvatarComponent },
{ path: 'mainpageavatar', component: MainPageAvatarComponent },
{path: 'editavatar' , component:EditPageAvatarComponent},
{path:'overviewavatar' , component:AvatarOverviewComponent},
{path: 'testgame' , component:TestgameComponent},
{path: 'createposter' , component:CreatePosterComponent},
{path: 'editposter' , component:EditPagePosterComponent},
{path: 'editstand' , component:EditPageStandComponent},
{path: 'createstand' , component:CreateStandComponent},
{path:'overviewposter', component:PosterOverviewComponent},
{path:'overviewstand', component:StandOverviewComponent},
{path:'createplayer', component:CreatePlayerComponent},
{path:'editplayer' ,component:EditPagePlayerComponent},
{path:'overviewplayer' ,component:PlayerOverviewComponent},
{ path: 'mainpageposter', component: MainPagePosterComponent },
{path:'mainpageplayer',component: MainPagePlayerComponent },
{path:'mainpagestand',component:MainPageStandComponent},
{ path: 'profile', component: ProfileComponent },
{ path: 'test', component: TableAvatarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
