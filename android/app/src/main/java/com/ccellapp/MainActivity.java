package com.ccellapp;

import static com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE;

import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.appupdate.AppUpdateInfo;
import com.google.android.play.core.appupdate.AppUpdateManager;
import com.google.android.play.core.appupdate.AppUpdateManagerFactory;
import com.google.android.play.core.install.model.AppUpdateType;
import com.google.android.play.core.install.model.InstallStatus;
import com.google.android.play.core.install.model.UpdateAvailability;

import org.devio.rn.splashscreen.SplashScreen;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "CCellApp";
  }

  // AppUpdateManager appUpdateManager;
  // int MY_REQUEST_CODE = 2911;

  @Override
  protected void onCreate(Bundle savedInstanceState) {

    SplashScreen.show(this);  // here

    // appUpdateManager = AppUpdateManagerFactory.create(this);
    // // Returns an intent object that you use to check for an update.
    // Task<AppUpdateInfo> appUpdateInfoTask = appUpdateManager.getAppUpdateInfo();

    // // Checks whether the platform allows the specified type of update and checks the update priority.
    // appUpdateInfoTask.addOnSuccessListener(appUpdateInfo -> {
    //   if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
    //           && appUpdateInfo.updatePriority() >= 5 /* high priority */
    //           && appUpdateInfo.isUpdateTypeAllowed(IMMEDIATE)) {
    //     // Request an immediate update.
    //     try {
    //       appUpdateManager.startUpdateFlowForResult(
    //               // Pass the intent that is returned by 'getAppUpdateInfo()'.
    //               appUpdateInfo,
    //               // Or 'AppUpdateType.FLEXIBLE' for flexible updates.
    //               IMMEDIATE,
    //               // The current activity making the update request.
    //               this,
    //               // Include a request code to later monitor this update request.
    //               MY_REQUEST_CODE);
    //     } catch (IntentSender.SendIntentException e) {
    //       e.printStackTrace();
    //     }
    //   }
    // });

    super.onCreate(savedInstanceState);
  }

  // @Override
  // public void onActivityResult(int requestCode, int resultCode, Intent data) {
  //   super.onActivityResult(requestCode, resultCode, data);
  //   if (requestCode == MY_REQUEST_CODE) {
  //     if (resultCode != RESULT_OK) {
  //       Log.d("App update", "Update flow failed! Result code: " + resultCode);
  //       // If the update is cancelled or fails,
  //       // you can request to start the update again.
  //     }
  //   }
  // }

  // Checks that the update is not stalled during 'onResume()'.
  // However, you should execute this check at all entry points into the app.
  // @Override
  // protected void onResume() {
  //   super.onResume();

  //   appUpdateManager
  //           .getAppUpdateInfo()
  //           .addOnSuccessListener(
  //                   appUpdateInfo -> {
  //                     if (appUpdateInfo.updateAvailability()
  //                             == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS) {
  //                       // If an in-app update is already running, resume the update.
  //                       try {
  //                         appUpdateManager.startUpdateFlowForResult(
  //                                 appUpdateInfo,
  //                                 IMMEDIATE,
  //                                 this,
  //                                 MY_REQUEST_CODE);
  //                       } catch (IntentSender.SendIntentException e) {
  //                         e.printStackTrace();
  //                       }
  //                     }
  //                   });
  // }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
