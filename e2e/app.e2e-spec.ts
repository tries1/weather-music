import { WeatherMusicPage } from './app.po';

describe('weather-music App', () => {
  let page: WeatherMusicPage;

  beforeEach(() => {
    page = new WeatherMusicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
