import { Route } from "@angular/router";
import { SignalComponent } from "./signal.component";



const ROUTES:Route[] = [
    {
        path: '',
        component: SignalComponent,
        children: [
            {
                path: '',
                pathMatch: "full",
                redirectTo: 'signal-ejemplo1',
            },
            {
                path: 'signal-ejemplo1',
                loadComponent: () => 
                    import('./signal-ejemplo1/signal-ejemplo1.component')
            },
            {
                path: 'signal-ejemplo2',
                loadComponent: () => 
                    import('./signal-ejemplo2/signal-ejemplo2.component')
            },
            {
                path: 'signal-ejemplo3',
                loadComponent: () => 
                    import('./signal-ejemplo2/signal-ejemplo3.component')
            },
        ]
    }
]

export default ROUTES; 