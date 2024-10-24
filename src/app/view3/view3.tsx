import { IgrAvatar, IgrAvatarModule, IgrCalendar, IgrCalendarModule, IgrChip, IgrChipModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule, IgrTree, IgrTreeItem, IgrTreeModule } from 'igniteui-react';
import { IgrFinancialChart, IgrFinancialChartModule } from 'igniteui-react-charts';
import { useGetStocks } from '../hooks/financial-hooks';
import styles from './view3.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrCalendarModule.register();
IgrChipModule.register();
IgrFinancialChartModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();
IgrTreeModule.register();

export default function View3() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { financialStocks } = useGetStocks();

  return (
    <>
      <div className={classes("column-layout view-3-container")}>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__body-1 text")}>
            <span>Body 1</span>
          </p>
          <IgrChip className={classes("chip")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>place</span>
              </span>
            </span>
            <span key={uuid()}>Country</span>
          </IgrChip>
          <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
          <IgrAvatar shape="circle">
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>people</span>
            </span>
          </IgrAvatar>
          <div className={classes("group_1")}>
            <IgrFinancialChart dataSource={financialStocks}></IgrFinancialChart>
          </div>
        </div>
        <div className={classes("row-layout group_2")}>
          <div className={classes("column-layout group")}>
            <IgrNavbar className={classes("navbar")}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>menu</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div className={classes("row-layout group_3")} key={uuid()}>
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
          </div>
          <div className={classes("column-layout group")}>
            <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
          </div>
          <div className={classes("column-layout group")}>
            <IgrTree selection="none" className={classes("tree")}>
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
          </div>
        </div>
      </div>
    </>
  );
}
