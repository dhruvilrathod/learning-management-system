import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProgramComponent } from './components/admin/add-program/add-program.component';
import { AddTrainerComponent } from './components/admin/add-trainer/add-trainer.component';
import { AllProgramsComponent } from './components/admin/all-programs/all-programs.component';
import { AllTalentsComponent } from './components/admin/all-talents/all-talents.component';
import { AllTrainersComponent } from './components/admin/all-trainers/all-trainers.component';
import { AssignRoleComponent } from './components/admin/assign-role/assign-role.component';
import { DashboardHomeComponent } from './components/admin/dashboard-home/dashboard-home.component';
import { EnrollmentApprovalComponent } from './components/admin/enrollment-approval/enrollment-approval.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { TalentApprovalComponent } from './components/admin/talent-approval/talent-approval.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { LoginComponent } from './components/public/login/login.component';
import { ProgramDetailsViewComponent } from './components/public/program-details-view/program-details-view.component';
import { ResetPasswordComponent } from './components/public/reset-password/reset-password.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { EditProfileTalentComponent } from './components/reusable/edit-profile-talent/edit-profile-talent.component';
import { EditProfileTrainerComponent } from './components/reusable/edit-profile-trainer/edit-profile-trainer.component';
import { MyProgramsComponent } from './components/reusable/my-programs/my-programs.component';
import { ProfileComponent } from './components/reusable/profile/profile.component';
import { ProgramGradesDetailsComponent } from './components/reusable/program-grades-details/program-grades-details.component';
import { MyGradesTableComponent } from './components/talent/my-grades-table/my-grades-table.component';
import { MyGradesComponent } from './components/talent/my-grades/my-grades.component';
import { EvaluateTalentsComponent } from './components/trainer/evaluate-talents/evaluate-talents.component';
import { EvaluationSheetComponent } from './components/trainer/evaluation-sheet/evaluation-sheet.component';
import { EvaluationTableComponent } from './components/trainer/evaluation-table/evaluation-table.component';
import { ProgramActivationComponent } from './components/trainer/program-activation/program-activation.component';
import { ProgramPublicationComponent } from './components/trainer/program-publication/program-publication.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Home' }
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Login' }
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Sign Up' }
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent,
    data: { 'title': 'LMS | Password Reset' }
  },
  {
    path: 'my-grades',
    component: MyGradesComponent,
    data: { 'title': 'LMS | My Grades' }
  },
  {
    path: 'my-grades/:programID',
    component: ProgramGradesDetailsComponent,
    data: { 'title': 'LMS | My Grades' }
  },
  {
    path: 'my-programs',
    component: MyProgramsComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | My Programs' }
  },
  {
    path: 'program-details',
    component: ProgramDetailsViewComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Program Details' }
  },
  {
    path: 'program-publication',
    component: ProgramPublicationComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Program Publication' }
  },
  {
    path: 'program-activation',
    component: ProgramActivationComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Program Activation' }
  },
  {
    path: 'evaluation',
    redirectTo: 'evaluation/programs'

  },
  {
    path: 'evaluation',
    children: [
      {
        path: 'evaluation-sheet/:programID',
        component: EvaluationSheetComponent,
        data: { 'title': 'LMS | Evaluation Sheet' }
      },
      {
        path: 'programs',
        component: EvaluationTableComponent,
        data: { 'title': 'LMS | Evaluation' }
      }
    ]
  },
  {
    path: 'dashboard-home',
    component: DashboardHomeComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Dashboard Home' }
  },
  {
    path: 'all-talents',
    component: AllTalentsComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | All Talents' }
  },
  {
    path: 'all-programs',
    component: AllProgramsComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | All Programs' }
  }, {
    path: 'all-trainers',
    component: AllTrainersComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | All Trainers' }
  },
  {
    path: 'enrollment-approvals',
    component: EnrollmentApprovalComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Enrollment Approvals' }
  },
  {
    path: 'talent-approvals',
    component: TalentApprovalComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Talent Approvals' }
  },
  {
    path: 'add-program',
    component: AddProgramComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Add Program' }
  },
  {
    path: 'add-trainer',
    component: AddTrainerComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Add Trainer' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Settings' }
  },
  {
    path: 'assign-role',
    component: AssignRoleComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Role Assignments' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Profile' }
  },
  {
    path: 'profile/talent/edit',
    component: EditProfileTalentComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Profile' }
  },
  {
    path: 'profile/trainer/edit',
    component: EditProfileTalentComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Profile' }
  },
  {
    path: 'all-talents/edit/:talentID',
    component: EditProfileTalentComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Edit Talent' }
  },
  {
    path: 'all-trainers/edit/:trainerID',
    component: EditProfileTrainerComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Edit Trainer' }
  },
  {
    path: 'all-programs/edit/:programID',
    component: AddProgramComponent,
    pathMatch: 'full',
    data: { 'title': 'LMS | Edit Program' }
  },
  {
    path: 'error-page',
    component: ErrorPageComponent,
    data: { 'title': 'LMS | Error' }
  },
  { path: '**', redirectTo: 'error-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
