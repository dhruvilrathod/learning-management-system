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
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { MyProgramsComponent } from './components/reusable/my-programs/my-programs.component';
import { ProfileComponent } from './components/reusable/profile/profile.component';
import { MyGradesComponent } from './components/talent/my-grades/my-grades.component';
import { EvaluateTalentsComponent } from './components/trainer/evaluate-talents/evaluate-talents.component';
import { ProgramActivationComponent } from './components/trainer/program-activation/program-activation.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-grades',
    component: MyGradesComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-programs',
    component: MyProgramsComponent,
    pathMatch: 'full'
  },
  {
    path: 'program-details',
    component: ProgramDetailsViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'program-activation',
    component: ProgramActivationComponent,
    pathMatch: 'full'
  },
  {
    path: 'evaluation',
    component: EvaluateTalentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard-home',
    component: DashboardHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'all-talents',
    component: AllTalentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'all-programs',
    component: AllProgramsComponent,
    pathMatch: 'full'
  },{
    path: 'all-trainers',
    component: AllTrainersComponent,
    pathMatch: 'full'
  },
  {
    path: 'enrollment-approvals',
    component: EnrollmentApprovalComponent,
    pathMatch: 'full'
  },
  {
    path: 'talent-approvals',
    component: TalentApprovalComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-program',
    component: AddProgramComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-trainer',
    component: AddTrainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full'
  },
  {
    path: 'assign-role',
    component: AssignRoleComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  
  { path: 'error-page', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
