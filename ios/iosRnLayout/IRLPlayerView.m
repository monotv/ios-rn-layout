//
//  IRLPlayerView.m
//  iosRnLayout
//
//  Created by Pierre Segalen on 09/02/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "IRLPlayerView.h"
#import <AVFoundation/AVFoundation.h>
#import <AVKit/AVKit.h>
#import <React/RCTBridge.h>
#import <React/RCTUtils.h>

@interface IRLPlayerView ()

@property(atomic, retain) AVPlayer *player;
@property(atomic, retain) NSString *streamUrl;

@end

@implementation IRLPlayerView
{
  __weak RCTBridge *_bridge;
  UIView *_subview;
}

RCT_NOT_IMPLEMENTED(- (instancetype)initWithFrame:(CGRect)frame)
RCT_NOT_IMPLEMENTED(- (instancetype)initWithCoder:coder)

- (instancetype)initWithBridge:(RCTBridge *)bridge
{
  if ((self = [super initWithFrame:CGRectZero])) {
    _bridge = bridge;
  }
  return self;
}

- (void)setUrl:(NSString *)url {
  if (self) {
    if (_subview == nil && ![url isEqual:_streamUrl]) {
      _streamUrl = url;
      [self initPlayer];
    }
  }
}

- (void)initPlayer {
  _player = [AVPlayer playerWithURL:[[NSURL alloc] initWithString:_streamUrl]];
  AVPlayerViewController *controller = [[AVPlayerViewController alloc] init];
  controller.player = _player;
  UIView *subview = controller.view;
  if (subview != nil) {
    [self addSubview:subview];
    _subview = subview;
    controller.showsPlaybackControls = NO;
    _player.closedCaptionDisplayEnabled = NO;
    [_player pause];
    [_player play];
  }
}

@end
