import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import { Header } from './components/ContactManager'

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';

const PLUGIN_NAME = 'TwilioTdkCrmPlugin';

export default class TwilioTdkCrmPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    flex.AgentDesktopView.Panel2.Content.add(
      <Header name="contactH" key="contactH"></Header>
    );
  }
}