import React, { FunctionComponent, useRef, useState, KeyboardEvent } from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';
import cn from 'classnames';


const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinDisplayed] = useState<boolean>(false);

  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == 'Space' || key.code == 'Enter'){
      key.preventDefault();
      bodyRef.current?.focus();
    } setIsSkipLinDisplayed(false)
  }

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsSkipLinDisplayed(true)}
        tabIndex={0}
        className={cn(styles.skipLink, {
        [styles.displayed]: isSkipLinkDisplayed
      })}
        onKeyDown={skipContentAction}
      >Сразу к содержанию</a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.body} ref={bodyRef} tabIndex={0} role="main">
        {children}
      </main>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={ props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
