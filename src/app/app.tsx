import { IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule, IgrToggleButton, IgrToggleButtonModule, IgrTree, IgrTreeItem, IgrTreeModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCheckboxModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();
IgrToggleButtonModule.register();
IgrTreeModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()} className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>App Name</span>
            </h6>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>favorite</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>more_vert</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>Screen Title</span>
            </h6>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>favorite</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>more_vert</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <IgrNavDrawer open="true" position="relative" className={classes("nav-drawer")}>
          <IgrNavDrawerItem key={uuid()}>
            <span slot="icon" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>account_circle</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </span>
            <div slot="content" key={uuid()}>Title goes here</div>
          </IgrNavDrawerItem>
          <IgrTree selection="none" className={classes("tree")} key={uuid()}>
            <IgrTreeItem label="Design" expanded="true" key={uuid()}>
              <IgrTreeItem label="Figma" expanded="true" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Adobe XD" expanded="true" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Sketch" expanded="true" key={uuid()}></IgrTreeItem>
            </IgrTreeItem>
            <IgrTreeItem label="Development" expanded="true" key={uuid()}>
              <IgrTreeItem label="Angular" expanded="true" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Blazor" expanded="true" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Web components" expanded="true" key={uuid()}></IgrTreeItem>
            </IgrTreeItem>
          </IgrTree>
          <IgrButton className={classes("button")} key={uuid()}>
            <span key={uuid()}>Button</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButtonGroup className={classes("button-group")} key={uuid()}>
            <IgrToggleButton key={uuid()}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrToggleButton>
            <IgrToggleButton key={uuid()}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrToggleButton>
            <IgrToggleButton key={uuid()}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrToggleButton>
          </IgrButtonGroup>
          <IgrCheckbox labelPosition="after" className={classes("checkbox")} key={uuid()}>
            <span key={uuid()}>Label</span>
          </IgrCheckbox>
        </IgrNavDrawer>
        <div className={classes("row-layout group_1")}>
          <IgrNavDrawer open="true" position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/view1`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>View 1</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/view2`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dns</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>View 2</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/view3`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>View 3</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
