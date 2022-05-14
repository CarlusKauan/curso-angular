import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmmiterComponent } from './components/emmiter/emmiter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent},
  { path: 'list', component: ListRenderComponent },
  { path: 'if', component: IfRenderComponent},
  { path: 'parent', component: ParentDataComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'emitter', component: EmmiterComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'two', component: TwoWayBindingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
