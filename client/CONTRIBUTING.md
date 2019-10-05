# How to contribute

## Features Template

### Component

Generate with **CLI**: `ng g c path/to/component -p=prefix -c=OnPush`

    @Component({
      selector: 'prefix-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.scss'],
      changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class ExampleComponent implements OnInit {
      @Input() input: any;
      @Output() output: EventEmitter<any> = new EventEmitter<any>();

      public ngOnInit(): void { }
    }

### Container

Generate with **CLI**: `ng g c path/to/container -p=prefix`

    @Component({
      selector: 'prefix-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.scss']
    })
    export class ExampleComponent extends BaseComponent implements OnInit {
      constructor(private store$: Store<IStore>) {
        super();
      }

      public ngOnInit(): void {
        super.ngOnInit();
      }
    }

### Directive

Generate with **CLI**: `ng g d path/to/directive -p=prefix`

    @Directive({
      selector: '[prefixExample]'
    })
    export class ExampleDirective { }

### Guard

Generate with **CLI**: `ng g g path/to/guard`

    @Injectable({
      providedIn: 'root'
    })
    export class ExampleGuard implements CanActivate, CanActivateChild, CanLoad {
      public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
      }

      public canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
      }

      public canLoad(
        route: Route,
        segments: UrlSegment[]
      ): Observable<boolean> | Promise<boolean> | boolean {
        return true;
      }
    }

### Pipe

Generate with **CLI**: `ng g p path/to/pipe`

    @Pipe({
      name: 'example'
    })
    export class ExamplePipe implements PipeTransform {
      @memo()
      transform(value: any, ...args: any[]): any {
        return null;
      }
    }

### Service

Generate with **CLI**: `ng g s path/to/service`

### Resolver

    @Injectable({
      providedIn: 'root',
    })
    export class ExampleResolver implements Resolve<boolean> {
      public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | boolean {
        return true;
      }
    }

### Effect

    @Injectable()
    export class ExampleEffect {
      @Effect()
      public loadDomains$ = this.actions$.pipe(
        ofType(TemplateActions.example.loading()),
        mergeMap((action: IActionCreator) => this.api.getInventory().pipe(
          map((response: any) => TemplateActions.example.dispatchComplete(response)),
          catchError((error: List<any>) => of(TemplateActions.example.dispatchFailed(error))),
          ),
        ),
      );

      constructor(
        private actions$: Actions,
        private api: StoreService,
      ) { }
    }
