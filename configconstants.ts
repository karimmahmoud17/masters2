// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.winixeg.masters';
    static appname = 'Masters Language School';
    static desktopappname = 'Masters Language School';
    static versioncode = 3520;
    static versionname = '3.5.2';
    static cache_expiration_time = 300000;
    static default_lang = 'en';
    static languages: any = {
        ar: 'عربي',
        de: 'Deutsch',
        en: 'English',
        fr: 'Français'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites = '';
    static gcmpn = '739671882455';
    static customurlscheme = 'moodlemobile';
    static siteurl = 'https://lms.mastersls.com';
    static multisitesdisplay = '';
    static skipssoconfirmation = false;
    static forcedefaultlanguage = false;
    static privacypolicy = 'https://moodle.org/mod/page/view.php?id=8148';
    static compilationtime = 1540749966352;
}
