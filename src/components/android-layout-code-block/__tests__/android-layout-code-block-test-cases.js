import AndroidLayoutCodeBlock from '../android-layout-code-block';

const testCases = {};

testCases.basic = {
  component: AndroidLayoutCodeBlock,
  description: 'Basic',
  props: {
    code: `<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:mapbox="http://schemas.android.com/apk/res-auto"
android:layout_width="match_parent"
android:layout_height="match_parent">
 
<com.mapbox.mapboxsdk.maps.MapView
android:id="@+id/mapView"
android:layout_width="match_parent"
android:layout_height="match_parent"
mapbox:mapbox_cameraTargetLat="38.9098"
mapbox:mapbox_cameraTargetLng="-77.0295"
mapbox:mapbox_cameraZoom="12" />
 
<Button
android:id="@+id/startButton"
android:layout_width="fill_parent"
android:layout_height="wrap_content"
android:layout_marginStart="16dp"
android:layout_marginLeft="16dp"
android:layout_marginTop="16dp"
android:layout_marginEnd="16dp"
android:background="@color/mapboxGrayLight"
android:enabled="false"
android:text="Start navigation"
android:textColor="@color/mapboxWhite"
mapbox:layout_constraintStart_toStartOf="parent"
mapbox:layout_constraintTop_toTopOf="parent" />
</android.support.constraint.ConstraintLayout>`
  }
};

testCases.custom = {
  component: AndroidLayoutCodeBlock,
  description: 'With link to GitHub file',
  props: {
    filename: 'activity_styles_runtime_styling',
    link: 'https://github.com/mapbox/',
    code: `<android.support.constraint.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:mapbox="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <com.mapbox.mapboxsdk.maps.MapView
        android:id="@+id/runtime_mapview"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        mapbox:mapbox_cameraTargetLat="19.948045"
        mapbox:mapbox_cameraTargetLng="-84.654463"
        mapbox:mapbox_cameraZoom="3.371717" />

    <android.support.design.widget.FloatingActionButton
        android:id="@+id/floatingActionButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginEnd="16dp"
        android:layout_marginRight="16dp"
        android:layout_marginBottom="16dp"
        mapbox:layout_constraintBottom_toBottomOf="parent"
        mapbox:layout_constraintEnd_toEndOf="parent" />

</android.support.constraint.ConstraintLayout>`
  }
};

export { testCases };
