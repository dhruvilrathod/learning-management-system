import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// component listing
import { HeaderNavBarComponent } from './components/header-nav-bar/header-nav-bar.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { LandingProgramCardComponent } from './components/public/landing-program-card/landing-program-card.component';
import { LoginComponent } from './components/public/login/login.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { ProgramDetailsViewComponent } from './components/public/program-details-view/program-details-view.component';
import { MyProgramsComponent } from './components/reusable/my-programs/my-programs.component';
import { MyGradesTableComponent } from './components/talent/my-grades-table/my-grades-table.component';
import { ProgramGradesDetailsComponent } from './components/reusable/program-grades-details/program-grades-details.component';
import { MyGradesComponent } from './components/talent/my-grades/my-grades.component';
import { ProgramActivationComponent } from './components/trainer/program-activation/program-activation.component';
import { EvaluateTalentsComponent } from './components/trainer/evaluate-talents/evaluate-talents.component';
import { EvaluationTableComponent } from './components/trainer/evaluation-table/evaluation-table.component';
import { EvaluationSheetComponent } from './components/trainer/evaluation-sheet/evaluation-sheet.component';
import { DashboardHomeComponent } from './components/admin/dashboard-home/dashboard-home.component';
import { AllTalentsComponent } from './components/admin/all-talents/all-talents.component';
import { AllTrainersComponent } from './components/admin/all-trainers/all-trainers.component';
import { ViewProfileTalentComponent } from './components/reusable/view-profile-talent/view-profile-talent.component';
import { EditProfileTalentComponent } from './components/reusable/edit-profile-talent/edit-profile-talent.component';
import { EditProfileTrainerComponent } from './components/reusable/edit-profile-trainer/edit-profile-trainer.component';
import { ViewProfileTrainerComponent } from './components/reusable/view-profile-trainer/view-profile-trainer.component';
import { TalentApprovalComponent } from './components/admin/talent-approval/talent-approval.component';
import { EnrollmentApprovalComponent } from './components/admin/enrollment-approval/enrollment-approval.component';
import { AddProgramComponent } from './components/admin/add-program/add-program.component';
import { AllProgramsComponent } from './components/admin/all-programs/all-programs.component';
import { ProgramCardRowComponent } from './components/reusable/program-card-row/program-card-row.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { AddTrainerComponent } from './components/admin/add-trainer/add-trainer.component';
import { AssignRoleComponent } from './components/admin/assign-role/assign-role.component';
import { FooterComponent } from './components/reusable/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProfileComponent } from './components/reusable/profile/profile.component';
import { ResetPasswordComponent } from './components/public/reset-password/reset-password.component';
import { ProgramPublicationComponent } from './components/trainer/program-publication/program-publication.component';


// Angular Materials Imports should be written here
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { ApprovalAcknowledgementComponent } from './components/public/approval-acknowledgement/approval-acknowledgement.component';

// ############### DO NOT TOUCH ######################
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavBarComponent,
    SideNavBarComponent,
    LandingPageComponent,
    LandingProgramCardComponent,
    LoginComponent,
    SignUpComponent,
    ProgramDetailsViewComponent,
    MyProgramsComponent,
    MyGradesTableComponent,
    ProgramGradesDetailsComponent,
    MyGradesComponent,
    ProgramActivationComponent,
    EvaluateTalentsComponent,
    EvaluationTableComponent,
    EvaluationSheetComponent,
    DashboardHomeComponent,
    AllTalentsComponent,
    AllTrainersComponent,
    ViewProfileTalentComponent,
    EditProfileTalentComponent,
    EditProfileTrainerComponent,
    ViewProfileTrainerComponent,
    TalentApprovalComponent,
    EnrollmentApprovalComponent,
    AddProgramComponent,
    AllProgramsComponent,
    ProgramCardRowComponent,
    SettingsComponent,
    AddTrainerComponent,
    AssignRoleComponent,
    FooterComponent,
    ErrorPageComponent,
    ProfileComponent,
    ApprovalAcknowledgementComponent,
    ResetPasswordComponent,
    ProgramPublicationComponent
  ],


  // Add whatever you import from materials
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
