import { IgrAvatar, IgrAvatarModule, IgrButtonGroup, IgrButtonGroupModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule, IgrTextarea, IgrTextareaModule, IgrToggleButton, IgrToggleButtonModule, IgrTree, IgrTreeItem, IgrTreeModule } from 'igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrColumn, IgrGrid, IgrGridModule, IgrPivotDataSelector, IgrPivotDataSelectorModule, IgrPivotDateDimension, IgrPivotDateDimensionOptions, IgrPivotGrid, IgrPivotGridModule } from 'igniteui-react-grids';
import { useRef } from 'react';
import { useGetBoxOfficeRevenue, useGetSales } from '../hooks/financial-hooks';
import { useGetEmployees } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './view2.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonGroupModule.register();
IgrCategoryChartModule.register();
IgrGridModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrNavbarModule.register();
IgrPivotDataSelectorModule.register();
IgrPivotGridModule.register();
IgrRippleModule.register();
IgrTextareaModule.register();
IgrToggleButtonModule.register();
IgrTreeModule.register();

export default function View2() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const dateDimensionOptions = { years: true, months: false, quarters: true} as IgrPivotDateDimensionOptions;
  const dateDimension =  { memberName: 'Date', enabled: true, options: dateDimensionOptions } as IgrPivotDateDimension;
  const pivotConfigHierarchy: any = {
    columns: [
      {
        memberName: 'Country',
        enabled: true,
      },
      {
        memberName: 'Product',
        enabled: true,
      },
    ],
    rows: [
      dateDimension,
    ],
    values: [
      {
        member: 'Sales',
        aggregate: {
          aggregatorName: 'SUM',
          key: 'Sum Of Sales',
          label: 'Sum',
        },
        enabled: false,
        dataType: 'currency',
      },
      {
        member: 'Profit',
        aggregate: {
          aggregatorName: 'SUM',
          key: 'Sum Of Profit',
          label: 'Sum',
        },
        enabled: true,
        dataType: 'currency',
      },
    ],
    filters: [
      {
        memberName: 'MonthName',
        enabled: false,
      },
    ],
  };
  const pivotGrid = useRef<IgrPivotGrid>(null);
  const pivotDataSelector = useRef<IgrPivotDataSelector>(null);
  const { northwindEmployees } = useGetEmployees();
  const { financialSales } = useGetSales();
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("row-layout view-2-container")}>
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
            <div className={classes("row-layout group_1")} key={uuid()}>
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
          <IgrButtonGroup className={classes("user-input")}>
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
          <IgrTextarea label="Label/Placeholder" outlined="true" className={classes("user-input")}></IgrTextarea>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Title goes here</div>
              <div slot="subtitle" key={uuid()}>Subtitle...</div>
              <div key={uuid()}>
                <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering="true" filterMode="excelStyleFilter" width="666px" height="300px" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="lastName" dataType="string" header="lastName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="firstName" dataType="string" header="firstName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="title" dataType="string" header="title" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="managerID" dataType="number" header="managerID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="notes" dataType="string" header="notes" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable="true" selectable="false"></IgrColumn>
                </IgrGrid>
              </div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group_2")}>
          <div className={classes("column-layout group")}>
            <div className={classes("row-layout group_3")}>
              <IgrPivotGrid data={financialSales} pivotConfiguration={pivotConfigHierarchy} superCompactMode="true" defaultExpandState="true" width="600px" height="300px" ref={pivotGrid} className={classes("ig-typography ig-scrollbar pivot-grid")}></IgrPivotGrid>
              <IgrPivotDataSelector grid={pivotGrid.current!} ref={pivotDataSelector}></IgrPivotDataSelector>
            </div>
          </div>
          <div className={classes("column-layout group")}>
            <span className={classes("material-icons icon")}>
              <span key={uuid()}>mail</span>
            </span>
            <img className={classes("image")} />
          </div>
          <div className={classes("column-layout group")}>
            <div className={classes("group_4")}>
              <IgrCategoryChart dataSource={financialBoxOfficeRevenue} computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
