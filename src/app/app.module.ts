import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
/*import { MdbModalRef } from 'mdb-angular-ui-kit/modal';*/


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { TableComponent } from './components/table/table.component';
import { CreateAvatarComponent } from './components/create-avatar/create-avatar.component';
import { MainPageAvatarComponent } from './components/main-page-avatar/main-page-avatar.component';
import { EditPageAvatarComponent } from './components/edit-page-avatar/edit-page-avatar.component';
import { AvatarOverviewComponent } from './components/avatar-overview/avatar-overview.component';
import { LogoutmodelComponent } from './components/logoutmodel/logoutmodel.component';
import { SidebarMenubuttonsComponent } from './components/sidebar-menubuttons/sidebar-menubuttons.component';
import { TestgameComponent } from './components/testgame/testgame.component';
import { EditPagePosterComponent } from './components/edit-page-poster/edit-page-poster.component';
import { PosterOverviewComponent } from './components/poster-overview/poster-overview.component';
import { MainPagePosterComponent } from './components/main-page-poster/main-page-poster.component';
import { TablePosterComponent } from './components/table-poster/table-poster.component';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { TableStandComponent } from './components/table-stand/table-stand.component';
import { MainPagePlayerComponent } from './components/main-page-player/main-page-player.component';
import { MainPageStandComponent } from './components/main-page-stand/main-page-stand.component';
import { PlayerOverviewComponent } from './components/player-overview/player-overview.component';
import { StandOverviewComponent } from './components/stand-overview/stand-overview.component';
import { EditPagePlayerComponent } from './components/edit-page-player/edit-page-player.component';
import { EditPageStandComponent } from './components/edit-page-stand/edit-page-stand.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { CreateStandComponent } from './components/create-stand/create-stand.component';
import { CreatePosterComponent } from './components/create-poster/create-poster.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProfileComponent } from './components/profile/profile.component';

import { VideoSectionComponent } from './components/video-section/video-section.component';
import { TableAvatarComponent } from './table-avatar/table-avatar.component';
import { TestgameheaderComponent } from './components/testgameheader/testgameheader.component';
import { HttpClientModule } from '@angular/common/http';
import { ChooseAvatarComponent } from './components/choose-avatar/choose-avatar.component';
import { AuthService } from './services/auth.service';
import { AvatarService } from './services/avatar.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    CreatePosterComponent,
    TableComponent,
    CreateAvatarComponent,
    MainPageAvatarComponent,
    EditPageAvatarComponent,
    AvatarOverviewComponent,
    LogoutmodelComponent,
    SidebarMenubuttonsComponent,
    TestgameComponent,
    EditPagePosterComponent,
    PosterOverviewComponent,
    MainPagePosterComponent,
    TablePosterComponent,
    TablePlayerComponent,
    TableStandComponent,
    MainPagePlayerComponent,
    MainPageStandComponent,
    PlayerOverviewComponent,
    StandOverviewComponent,
    EditPagePlayerComponent,
    EditPageStandComponent,
    CreatePlayerComponent,
    CreateStandComponent,
    SideBarComponent,
    ProfileComponent,
    VideoSectionComponent,
    TableAvatarComponent,
    TestgameheaderComponent,
    ChooseAvatarComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   /* MdbModalRef,*/
  ],
  providers: [
    provideClientHydration(),
    AvatarService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
