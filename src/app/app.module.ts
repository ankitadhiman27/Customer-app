import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/home/main-pages/main-pages';
import { AccountsPage } from '../pages/home/main-pages/accounts/accounts';
import { ItemDetailsPage } from '../pages/home/main-pages/item-details/item-details';
import { StockHistoryPage } from '../pages/home/main-pages/stock-history/stock-history';
import { PrefrencesPage } from '../pages/home/main-pages/prefrences/prefrences';
import { AnalyticsPage } from '../pages/home/main-pages/analytics/analytics';
import { NotificationsPage } from '../pages/home/main-pages/notifications/notifications';
import { CompanyDetailPage } from '../pages/home/company/company-detail/company-detail';
import { EmailPage } from '../pages/home/company/email/email';
import { StockDetailsPage } from '../pages/home/main-pages/stock-history/stock-details/stock-details';
import { CommunicationPage } from '../pages/home/main-pages/communication/communication';
import { CommunicationDetails } from '../pages/home/main-pages/communication/communication-details/communication-details';


@NgModule({
  declarations: [
    MyApp,
	LoginPage,
    HomePage,
    MainPage,
    AccountsPage,
    ItemDetailsPage,
    StockHistoryPage,
    PrefrencesPage,
    AnalyticsPage,
    NotificationsPage,
    CompanyDetailPage,
    EmailPage,
    StockDetailsPage,
    CommunicationPage,
    CommunicationDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LoginPage,
    HomePage,
    MainPage,
    AccountsPage,
    ItemDetailsPage,
    StockHistoryPage,
    PrefrencesPage,
    AnalyticsPage,
    NotificationsPage,
    CompanyDetailPage,
    EmailPage,
    StockDetailsPage,
    CommunicationPage,
    CommunicationDetails
  ],
  providers: []
})
export class AppModule {}
