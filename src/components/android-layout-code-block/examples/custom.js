/*
With filename and GitHub link.
*/
import React from 'react';
import AndroidLayoutCodeBlock from '../android-layout-code-block';

export default class Custom extends React.PureComponent {
  render() {
    const code = `<android.support.constraint.ConstraintLayout
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

</android.support.constraint.ConstraintLayout>`;

    return (
      <AndroidLayoutCodeBlock
        code={code}
        filename="activity_styles_runtime_styling"
        link="https://github.com/mapbox/"
      />
    );
  }
}
